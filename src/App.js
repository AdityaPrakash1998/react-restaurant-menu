import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item=>item.category))] ;

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory =(category)=>{
    if(category==='all'){
      setMenuItems(items);
    }else{
      const newMenuItems= items.filter(item=>item.category===category);
      setMenuItems(newMenuItems);
    }
  };

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Restaurant's Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterCategory={filterCategory} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
