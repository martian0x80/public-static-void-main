import {Pagination} from "@mui/material";
import {useState} from "react";

export default function Paginator({page, setPage}) {

    return (
        <>
            <Pagination
                shape={"rounded"}
                size={"large"}
                page={page}
                onChange={(e, v) => setPage(v)}
                count={10}
                showFirstButton
                showLastButton
            />
        </>
    )
}