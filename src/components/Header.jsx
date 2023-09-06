import React from 'react'

function Header({test}) {

    console.log(test.bckg);
    
    const headerStyles= {
        backgroundColor: test.bckg, 
        color: test.clr
    }

    console.log(headerStyles);



  return (
    <header style={headerStyles}> 
                <div className="container">
                    <h2>nevermind</h2>
                </div>
    </header>
  )

}

Header.defaultProps = {
    text: 'Legal Advisor J.D.S',
}

export default Header
