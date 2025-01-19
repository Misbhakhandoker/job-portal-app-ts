"use client"
import useAuthStore from "@/store/useAuth";

function HomePage() {
    const { userInfo } = useAuthStore();
    console.log(userInfo);
    
    if(userInfo){
        console.log(userInfo);
    }

    return ( <div>

    </div> );
}

export default HomePage;