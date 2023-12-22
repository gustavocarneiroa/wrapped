function Coupon(props: { code: string, isMobile: boolean }) {
    return (
        <div className="coupon-card"

            style={
                props.isMobile ? {
                    margin: "5%",
                    marginLeft: 2,
                } : {
                    margin: "3%"
                }
            }>
            <img src="/wrapped/logo.png" className="logo" />
            <div>
                <h2>INDIQUE UM AMIGO</h2>
                <div className="coupon-row" onClick={() => copyToClipboard(props.code)}>
                    <span id="cpnCode">{props.code}</span>
                </div>
                <p style={{ fontSize: "70%" }}>Desconto de 20% na próxima mensalidade do aluno e na primeira mensalidade do novo aluno ingressante. Uso único, válido até 31/01/2024.</p>
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
};

function copyToClipboard(text: string) {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

    alert('Copiado para a área de transferência');
}

export default Coupon