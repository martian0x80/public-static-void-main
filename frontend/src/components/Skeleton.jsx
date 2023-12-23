import {Skeleton} from "@mui/material";

export default function LoadSkeleton() {

    return (
        <div className={"grid md:grid-cols-2 gap-6 "}>
            <div className={"mx-auto border-2 rounded-xl items-center p-4 bg-slate-200"}>
                <Skeleton variant={"rectangular"} width={150} height={150}/>
                &nbsp;
                <div className={"flex flex-row"}>
                    <Skeleton variant="rectangular" className={"w-60"}/>
                    <div className={"w-20"}></div>
                    <Skeleton variant="rectangular" height={30} className={"w-20"}/>
                </div>
                &nbsp;
                <Skeleton variant="rectangular" className={"w-40"}/>
                &nbsp;
                <Skeleton variant="rectangular" height={40} className={"w-100"}/>
            </div>
            <div className={"mx-auto border-2 rounded-xl items-center p-4 bg-slate-200"}>
                <Skeleton variant={"rectangular"} width={150} height={150}/>
                &nbsp;
                <div className={"flex flex-row"}>
                    <Skeleton variant="rectangular" className={"w-60"}/>
                    <div className={"w-20"}></div>
                    <Skeleton variant="rectangular" height={30} className={"w-20"}/>
                </div>
                &nbsp;
                <Skeleton variant="rectangular" className={"w-40"}/>
                &nbsp;
                <Skeleton variant="rectangular" height={40} className={"w-100"}/>
            </div>

            <div className={"mx-auto border-2 rounded-xl items-center p-4 bg-slate-200"}>
                <Skeleton variant={"rectangular"} width={150} height={150}/>
                &nbsp;
                <div className={"flex flex-row"}>
                    <Skeleton variant="rectangular" className={"w-60"}/>
                    <div className={"w-20"}></div>
                    <Skeleton variant="rectangular" height={30} className={"w-20"}/>
                </div>
                &nbsp;
                <Skeleton variant="rectangular" className={"w-40"}/>
                &nbsp;
                <Skeleton variant="rectangular" height={40} className={"w-100"}/>
            </div>

            <div className={"mx-auto border-2 rounded-xl items-center p-4 bg-slate-200"}>
                <Skeleton variant={"rectangular"} width={150} height={150}/>
                &nbsp;
                <div className={"flex flex-row"}>
                    <Skeleton variant="rectangular" className={"w-60"}/>
                    <div className={"w-20"}></div>
                    <Skeleton variant="rectangular" height={30} className={"w-20"}/>
                </div>
                &nbsp;
                <Skeleton variant="rectangular" className={"w-40"}/>
                &nbsp;
                <Skeleton variant="rectangular" height={40} className={"w-100"}/>
            </div>

            <div className={"mx-auto border-2 rounded-xl items-center p-4 bg-slate-200"}>
                <Skeleton variant={"rectangular"} width={150} height={150}/>
                &nbsp;
                <div className={"flex flex-row"}>
                    <Skeleton variant="rectangular" className={"w-60"}/>
                    <div className={"w-20"}></div>
                    <Skeleton variant="rectangular" height={30} className={"w-20"}/>
                </div>
                &nbsp;
                <Skeleton variant="rectangular" className={"w-40"}/>
                &nbsp;
                <Skeleton variant="rectangular" height={40} className={"w-100"}/>
            </div>


        </div>
    )
}