import { MouseEventHandler } from "react";
import Coupon from "./coupon";

export const seeCoupon = (coupon: string, isMobile: boolean) => {
    return ({ close }: { close: MouseEventHandler }) => (
    <>
        <div className="container" style={{ backgroundColor: "#A7A4C7", display: "flex", flexDirection: "column" }}>
            <Coupon code={coupon} isMobile={isMobile}></Coupon>
            <p style={{ textDecoration: "underline" }} onClick={close}>
                Back
            </p>
        </div>
    </>
    )
}
