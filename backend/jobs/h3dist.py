import h3
from haversine import haversine

def coordinates_to_h3(lat, lon, resolution=7):
    """
    Convert latitude and longitude to H3 hexagon.
    """
    return h3.geo_to_h3(lat, lon, resolution)

def h3_to_coordinates(h3_hex):
    """
    Convert H3 hexagon to latitude and longitude.
    """
    lat, lon = h3.h3_to_geo(h3_hex)
    return lat, lon

def h3_distance(h3_hex1, h3_hex2):
    """
    Calculate the distance between two H3 hexagons using haversine formula.
    """
    return h3.h3_distance(h3_hex1, h3_hex2)

# # Example usage
# lat1, lon1 = 37.7749, -122.4194  # San Francisco coordinates
# lat2, lon2 = 34.0522, -118.2437  # Los Angeles coordinates

# # Convert coordinates to H3 hexagons
# hexagon1 = coordinates_to_h3(lat1, lon1)
# hexagon2 = coordinates_to_h3(lat2, lon2)

# # Convert H3 hexagons back to coordinates
# lat1_back, lon1_back = h3_to_coordinates(hexagon1)
# lat2_back, lon2_back = h3_to_coordinates(hexagon2)

# # Calculate distance between two H3 hexagons
# distance = h3_distance(hexagon1, hexagon2)

