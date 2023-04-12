import React from 'react';
import { CarouselProps as BaseCarouselProps } from 'react-bootstrap/Carousel';
import { CarouselItemProps as BaseCarouselItemProps } from 'react-bootstrap/CarouselItem';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface CarouselProps extends BaseCarouselProps {}

export interface CarouselItemProps extends BaseCarouselItemProps {}

export interface CarouselCaptionProps extends BsPrefixProps {}

declare const Carousel: React.ForwardRefExoticComponent<CarouselProps> & {
    Item: React.ForwardRefExoticComponent<CarouselItemProps>;
    Caption: React.FC<CarouselCaptionProps>;
};

export default Carousel;
