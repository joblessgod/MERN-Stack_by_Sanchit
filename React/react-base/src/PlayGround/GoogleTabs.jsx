import React, { useState } from 'react';
function GoogleTabs() {
    let tabs = ["All", "Images", "Video", "Map"]
    const [selectedTabs, setSelectedTabs] = useState("All")
    return (
        <div className='everything'>

            <div className='headers'>
                <h1>Googloo Tabs</h1>
                <ul >
                    {tabs.map((el, idx) => {
                        return <li className='tabs' onClick={() => {
                            setSelectedTabs(el)
                        }} key={idx}>{el}</li>
                    })}
                </ul>

            </div>
            <div className='informations up'>
                {selectedTabs == "All" &&
                    <div>

                        <h3>All</h3>
                        <p>All: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis architecto numquam optio eveniet nostrum, doloribus non hic iure, esse iste illum. Accusamus earum corporis repudiandae molestias temporibus sint similique!</p>
                    </div>
                }
                {selectedTabs == "Images" &&
                    <div>

                        <h3>Images</h3>
                        <p>Images: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis architecto numquam optio eveniet nostrum, doloribus non hic iure, esse iste illum. Accusamus earum corporis repudiandae molestias temporibus sint similique!</p>
                    </div>
                }
                {selectedTabs == "Video" &&
                    <div>

                        <h3>Video</h3>
                        <p>Video: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis architecto numquam optio eveniet nostrum, doloribus non hic iure, esse iste illum. Accusamus earum corporis repudiandae molestias temporibus sint similique!</p>
                    </div>
                }
                {selectedTabs == "Map" &&
                    <div>
                        
                    </div>
                }

            </div>

        </div>

    );
}

export default GoogleTabs;