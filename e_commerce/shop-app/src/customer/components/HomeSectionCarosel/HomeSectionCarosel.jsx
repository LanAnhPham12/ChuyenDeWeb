import React from 'react';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard"; // Import card đúng

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    }

    const items = [1, 2, 3, 4, 5].map((item) => <HomeSectionCard key={item} />)

    return (
        <div>
            <AliceCarousel
                animationType="fadeout"
                animationDuration={800}
                disableButtonsControls
                infinite
                items={items}
                mouseTracking
                responsive={responsive}
            />
        </div>
    )
}
export default HomeSectionCarosel;
