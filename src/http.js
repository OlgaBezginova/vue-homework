import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:8182",
    headers: {
        "Content-type": "application/json",
        "api-token": "$2y$10$88fHl/Jg/WM0i4yx1eL63.AAqs.weFzkcBAzdfGO2YwJy63Kk0O/K",
    }
})