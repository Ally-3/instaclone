function Logout(props) {
    function logoutfunc(setLoggedIn, setPhotos, setEmail) {
        try {
            document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
            window.location.href = window.location.origin;
        } catch (error) {
           console.log(error); 
        }
    }
    function handleClick(event) {
    logoutfunc(props.setLoggedIn, props.setPhotos, props.setEmail)
};
    return (
        <div>
            <button className="logout-bt" onClick={handleClick}>Log Out</button>
        </div>
    )
}
export default Logout;