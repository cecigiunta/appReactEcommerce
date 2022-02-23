import React from 'react'
import {Button, Spinner} from 'react-bootstrap'

const styles = {
    button: {

    }
}

function ButtonWithLoading (props) {
    const {variant, type, loading} = props
    return (
        <Button
            type= {type || "submit"}
            variant= {variant || "primary"}
            disabled= {loading}
            styles={styles.button}
        >

            {
                loading &&
                <Spinner animation ="border" size="sm"/>
            }
            {props.children}

        </Button>
    )
}

export default ButtonWithLoading 
