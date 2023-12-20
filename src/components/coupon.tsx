function Coupon(props: { code: string }) {
    return (
        <div className="coupon-card" style={{
            margin: "2%"
        }}>
            <img src="/wrapped/logo.png" className="logo" />
            <div className="coupon-row">
                <span id="cpnCode">{props.code}</span>
            </div>
            <p style={{
                fontSize: "70%"
            }}>O cupom é válido até 31/01/2024. O desconto único é de 20% de desconto na próxima mensalidade do aluno e 20% na primeira mensalidade do novo aluno. Uso único.</p>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
};

export default Coupon