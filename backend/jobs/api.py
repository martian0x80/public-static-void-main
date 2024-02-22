from rest_framework.response import Response
from rest_framework.views import APIView
from .models import JobModel
from .serializer import JobSerializer
from rest_framework.pagination import PageNumberPagination
from .h3dist import coordinates_to_h3, h3_distance


class CustomPagination(PageNumberPagination):
    page_size = 10
    page_query_param = "page"
    page_size_query_param = "page_size"
    max_page_size = 20


class JobApi(APIView):
    #    Doesn't work with APIView
    #    pagination_class = CustomPagination
    def get(self, request):
        jobs = JobModel.objects.all().order_by("-id")
        totalJobs = jobs.count()
        # or inherit from Pagination class
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(jobs, request)
        serializer = JobSerializer(result_page, many=True)

        latitude = request.query_params.get("latitude", 0)
        longitude = request.query_params.get("longitude", 0)
        print(latitude, longitude)

        distance = lambda lat, longi: h3_distance(
            coordinates_to_h3(float(latitude), float(longitude)),
            coordinates_to_h3(float(lat), float(longi)),
        )
            
        new_data = [
            i | {"distance": distance(i["geoLat"], i["geoLong"])}
            for i in serializer.data
        ]
        
        data = {"totalJobs": totalJobs, "jobs": new_data}
        return Response(data)

    def post(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, pk):
        job = JobModel.objects.get(pk=pk)
        job.delete()
        return Response("Item successfully deleted")
