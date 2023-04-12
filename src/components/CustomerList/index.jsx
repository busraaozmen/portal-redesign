import React from "react";
import style from "./style.module.css";
import { CustomerListItem } from "@/components";

function CustomerList({ users = [] }) {
    return (
        <div>
            <div className={style.list}>
                {users?.map((user) => (
                    <CustomerListItem
                        className={style.item}
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomerList;
