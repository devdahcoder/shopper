import React from 'react'
import "./assets/style/index.css"



const ProfileCategoryList = ({category}) => {
    return (
        <a href="" className="profile-category-list">
            <div>
                <li>{category.category}</li>
            </div>
        </a>
    )
}

export default ProfileCategoryList
