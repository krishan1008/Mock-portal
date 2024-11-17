const IndexData = ()=> {
    return (
        <>
        <div class="wrapper">
            <div class="alert alert_inverse show-alert ">
              <div class="error-icon">
                <img src="images/error.png"/>
              </div>
              <div class="error-msg">
                <span>Fehler</span>
                <p id="alertShowMessage">E-Mail Adresse ist erforderlich.</p>
              </div>
              <div class="clear"></div>
            </div>

            <div class="left-section"> 
                         
            </div>

            <div class="right-section">
            <form>
                <div class="formbox">
                    <div class="logo ">
                        <img src="images/logo.png"/>
                    </div>
                    <div class="login-bx ">
                        <div class="title">
                            <h2>Welcome to Mock Portal</h2>
                        </div>
                        <div class="form">
                            <form action="dashboard.html"/>
                                <div class="form-element">
                                    <label>Username/Email</label>
                                    <input type="email" id="email"/>
                                    <div class="error-msg"></div>
                                </div>
                                <div class="form-element">
                                    <label>Password</label>
                                    <input type="password"  id="password"/>
                                    <div class="error-msg"></div>
                                </div>
                                <div class="form-element">
                                    <div class="col-6">
                                        <label class="checkbox leftlabel"><input type="checkbox"/><i class="input-helper"></i>Remember me</label>
                                    </div>
                                    <div class="col-6 forgot-password">
                                        <a href="javascript:;" class="reset-btn">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="submit-wrap">
                                    <input type="submit" value="Sign In"/>
                                   
                                </div>
                        </div>
                    </div>
                    <div class="forgot-bx">
                        <div class="title">
                            <h2>Forgot Password ?</h2>
                        </div>
                        <div class="form">
                            <div class="form-element">
                                <label>Username/Email</label>
                                <input type="text"/>
                                <div class="error-msg"></div>
                            </div>
                            <div class="form-element">
                                <div class="forgot-password">
                                    <a href="javascript:;" class="login-btn">Back to Login</a>
                                </div>
                            </div>
                            <div class="submit-wrap ">
                                <a href="javascript:;" class="common-btn">Reset Password</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            
            
        
        
        
        
        </>
    )
}
export default IndexData
