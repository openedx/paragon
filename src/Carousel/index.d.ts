import React from 'react';
import { CarouselProps } from 'react-bootstrap/Carousel';
import { CarouselItemProps } from 'react-bootstrap/CarouselItem';
import { BsPrefixProps } from 'react-bootstrap/helpers';

declare const Carousel: React.ForwardRefExoticComponent<CarouselProps> & {
    Item: React.ForwardRefExoticComponent<CarouselItemProps>;
    Caption: React.FC<BsPrefixProps>;
};

export default Carousel;
