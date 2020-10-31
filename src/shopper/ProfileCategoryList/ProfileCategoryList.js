import React from 'react'
import "./assets/style/index.css"



const ProfileCategoryList = ({category}) => {
    return (
        <a href="http://www.google.com" className="profile-category-list">
            <div>
                <li>{category.category}</li>
            </div>
        </a>
    )
}

export default ProfileCategoryList
