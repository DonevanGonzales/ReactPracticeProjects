import React from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'Title',
        content: 'Content'
    },
    {
        title: 'Quisque vehicula?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien tellus, vulputate vitae ipsum vel, commodo convallis neque. Nulla vel porttitor sapien, et commodo ante. Duis nec sapien vel ante aliquam consectetur et ac mi. Etiam tincidunt nec arcu imperdiet venenatis. Aliquam erat volutpat. Donec ex ligula, rhoncus quis mollis sit amet, congue sit amet elit.'
    },
    {
        title: 'Neque porro',
        content: 'Aenean non fringilla turpis. Maecenas sagittis gravida pellentesque. Fusce vestibulum velit leo, non fringilla eros pretium ut. Maecenas tortor massa, maximus nec vehicula in, tincidunt quis erat. Sed et leo sed enim vestibulum interdum in quis leo.'
    }
]

const App = () => {
    return (
        <div>
            <Accordion items={items}/>
            <br />
            <Search />
        </div>
    )
}

export default App;
