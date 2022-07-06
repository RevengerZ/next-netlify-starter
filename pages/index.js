*{
margin: 0;
 padding: 0;
 box-sizing: border-box;

font-family: 'poppins', sans-serif;

}

.container{
    width:100%;
    height: 100vh;
    background: #001660;
    display: flex;
    align-items: center;
    justify-content: center;
    

}

form{
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 2vw 4vw;
    width: 90%;
    max-width: 600px;
    border-radius: 10px;


}


form h3{
    color:#555 ;
    font-weight: 800;
    margin-bottom: 20px;
}

form input, form textarea{
    border: 0;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: #f5f5f5;
    font-size: 16px
}

form button{
    padding: 15px;
    background: #ff5361;
    color: #fff;
    font-size: 18px;
    border: 0;
    outline: none;
    cursor: pointer;
    width: 150px;
    margin: 20px auto 0;
    border-radius: 30px;
    
}
