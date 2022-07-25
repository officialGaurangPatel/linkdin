import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import businessCenterIcon from '@material-ui/icons/BusinessCenter';
import SuperviseorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser } from './features/userSlice';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
    const { user: user } = useSelector(selectUser);
    const dispatch = useDispatch();
    const auth = getAuth();

    const logOutApp = () => {
        dispatch(logOut())
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            alert(error.message);
        });

    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAYFBMVEUAd7f///8AdLYAcbX3+/3t9vrR4O1Wk8UqfboAb7RspM3j7fXx9voxg72Gr9JBicAAa7K70eV6qM9Ej8MYf7vK3eysyOEAaLG/1+mhwt0AZK9kn8tZmMdRjMHY5/GYu9o648mBAAADxElEQVR4nO2c2XKrMAyGjR0SiNlCwlYovP9bHsjSsEjgOIPtOeP/op0pDf1qy5IsI4jzEL+k1xtRqds1vfDnXyf3r25EGKNKIQihjJHIfVNknq+Y4CXfy14UeaJ6GN6iSf6gyBJtDIOSbKBwPX0jMYh6bk8R6bKJl/zIIVwzwyBOLkw3A2EXkhpAkZKrXtscRK9ErduGZQLDhmjv6almZ+KT+FTXza+nPMy9GZKwag+PmF/WiZ515HulMxJPCx0Q6cGZqiTKpyXpnIWOqmNeH10AtWopWA1B9JOiNA3xOEzh1ApXig8YxXOlKJwTFmAUzlnZYNAzCuFkyrIyP8cpuKeM4ohTHE6qLCPBzaI3DFUU/tx3j6UsO1ynUDYjmM8aVCubkWzFOn9VUTDUdfYrVRHDkJXjhpGri2dFi1IomxA8sPehXWX2yS4IhdJsa6gnQFJcYWBXzab5xIiXrktDrYWF5ZSBn3UUfGiRjhbsofM0FTlYEVcld11+zOtEY+VrKM163v2b1X8iOujrG4z04XXGGPVuYRjH4a23LF+KhRX95yeiE8+Z0HjlOivYuSrb4JkiBG1ZNaz4GMRPl4l4PoYE9izVayX5XgRtJsqafLbe6Wk9jsDpWHfH+Dt3WYqnHxXI4NAehH/3ABPkezqYNGvJ8zH+YDgYuD17b8zgyN9vH6lfrTAMisTrY7IUlGD50VuVsCOWpfgpoZ/P1ImmKZIUdGW3P1IkiCFJkQpBOI7gxl+OIljb7I/Vii0UOQpxdUIYe1O4ocic7E0hNhi7UwQiTmN3CqGa0P4UpcCU7E/hmEHRbE/JtxT9HibjfK1K51Tbg/EdRdncil7sF013emX7jsUxfCWYlP3gJTKBWvYXFOUkqfPRspATb7pPeYrjbKB9NM42+1EEiwDxg1VPo03DkKZYVlroCVkq24tElgIKDwly0FFupsGyFB1AwRDLaHejgOyexvCUtJvZpyQFB2+MnIvyvawTLkUiZwzbp6KSFHDSkMA7pWDTecpRIEd7yKYx2HwUR47ChZ0y/OjAbhRIgGJGU2zuBizFThSYdVoKS2EpLIWlsBSWwlJYCkthKSyFpbAUluJzCvDU/hBvUCA3g8uuArUc8IPvLlb4KZEcrmxTAlIItBwk3bJgm42eMaXAlJXo/1QDB/BC/UEsrs9TncbdTZQ25/l1/MEsFs5vdm7EHuMauu4mmn1qfnn1uZ/FL+tro9uQCf2QN0P6U83o1TWjb9mMHm4z+tkN6e034z0HhrzzwZD3XxjyLhBH93tR/gE310a3xgT/AAAAAABJRU5ErkJggg==' alt=''>

                </img>

                <div className='header__search'>
                    {/* SearchBox */}
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SuperviseorAccountIcon} title='My Network' />
                <HeaderOption Icon={businessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption onClick={logOutApp} avatar={user && user.photoUrl ? user?.photoUrl : user?.email[0]} title={user?.displayName} />
            </div>
        </div>
    )
}

export default Header