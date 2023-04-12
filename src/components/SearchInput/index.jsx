import React from "react";
import classNames from "classnames";
import { ReactComponent as SearchIcon } from "@/assets/search.svg";
import style from "./style.module.css";

function SearchInput({ className, query, setQuery }) {
    return (
        <div className={classNames(style.container, className)}>
            <SearchIcon className={style.icon} />
            <input
                className={style.input}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SEARCH (Client Name / Policy Number)"
            />
        </div>
    );
}

export default SearchInput;
