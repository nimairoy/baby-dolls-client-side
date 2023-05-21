import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactTabCard from './ReactTabCard';

const ReactTabs = () => {

    const [categories, setCategories] = useState([]);

    let allCategoryCard = [];

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <>
            <h2 className="text-4xl mb-12 mt-4 text-center font-bold">Shop By Category</h2>            
            <Tabs>                
                <TabList>
                    {
                        categories.map(category => <Tab
                            key={category._id}>
                            {category.title}
                        </Tab>)
                    }
                </TabList>
                {
                    categories.map(category => <TabPanel key={category._id} >
                        <div className="md:grid md:grid-cols-3 gap-4">
                            {
                                category.content.map(doll =>
                                    <ReactTabCard
                                        key={doll.id}
                                        doll={doll}
                                    ></ReactTabCard>
                                )
                            }
                        </div>

                    </TabPanel>)
                }
            </Tabs>
        </>
    );
};

export default ReactTabs;