import React, {useState} from 'react'
import "./assets/style/index.css"
import ProfileCategoryList from "../ProfileCategoryList/ProfileCategoryList"


const initialState = [
  {
    id: 1,
    category: "All Products",
  },
  {
    id: 2,
    category: "Home Decor",
  },
  {
    id: 3,
    category: "Home Accent",
  },
  {
    id: 4,
    category: "Home Accent",
  },
  {
    id: 5,
    category: "Home Accent",
  },
  {
    id: 6,
    category: "Home Accent",
  },
  {
    id: 7,
    category: "Home Accent",
  },
  {
    id: 8,
    category: "Home Accent",
  },
  {
    id: 9,
    category: "Home Accent",
  },
  {
    id: 10,
    category: "Home Accent",
  },
  {
    id: 11,
    category: "Home Accent",
  },
  {
    id: 12,
    category: "Home Accent",
  },
  {
    id: 13,
    category: "Home Accent",
  },
  {
    id: 14,
    category: "Home Accent",
  },
];

const ProfileCategoryDisplay = () => {

    const [categories, setCategories] = useState(initialState)
    return (
      <div>
        <div className="profile-category-display">
          {categories.map((category) => (
            <ProfileCategoryList key={category.id} category={category} />
          ))}
        </div>
      </div>
    );
}

export default ProfileCategoryDisplay
