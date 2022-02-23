function Footer(){
const styles = {
    footer: {
        height: "50px",
        lineHeight:"50px",
        background:"black",
        color:"white",
        textAlign:"center",
        position:"bottom",
        martinBottom:"0",
        left:"0",
        width:"100%",
        fixed:"bottom"

    }
}
    return (
        <div>

          <p style= {styles.footer}>  Todos los derechos reservados</p>
        </div>
    )

}
export default Footer