import '../styles/userHeader.css'

function UserHeader () {
    return (
        <header className="userHeader-container">
            <h4 className="userHeader_h4">LAUNDRY</h4>
            <div className="userHeader_menuBox">
                <p className="userHeader_menu_p">Pricing</p>
                <p className="userHeader_menu_p">Career</p>
                <div className="userHeader_menu_username_box">
                    <div className="userHeader_menu_username_pic">
                        <img className="userHeader_displayPicture" src='https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='display-picture'></img>
                    </div>
                    <p className="userHeader_menu_username">User Name</p>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;

