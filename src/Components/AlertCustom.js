import Alert from 'react-bootstrap/Alert'

const styles = {
    alert: {
        marginTop:"10px"
    }
}

function AlertCustom (props){
    const {variant,text} = props
    
        return(
          <Alert variant={variant} styles={styles.alert}>
            {text}
          </Alert>  
        )
        }
     
export default AlertCustom