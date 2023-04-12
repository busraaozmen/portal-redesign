import React from "react";
import classNames from "classnames";
import { ReactComponent as PhoneIcon } from "@/assets/phone.svg";
import { ReactComponent as CircleIcon } from "@/assets/circle.svg";
import { ReactComponent as FileIcon } from "@/assets/file.svg";
import style from "./style.module.css";

function CustomerListItem({ className, user = {} }) {
    return (
        <div className={classNames(style.container, className)}>
            <div className={style.title}>
                {user.firstName} {user.lastName}
            </div>
            <div className={style.phone}>
                <PhoneIcon className={style.icon} />
                <span>{user.phone}</span>
            </div>
            <div className={style.email}>
                <CircleIcon className={style.icon} />
                <span>{user.email}</span>
            </div>
            <div className={style.policy}>
                <FileIcon className={style.icon} />
                <span>Policy No. {user.ssn}</span>
            </div>
        </div>
    );
}

export default CustomerListItem;
