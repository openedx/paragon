import React from 'react';
import { CarouselProps as BaseCarouselProps } from 'react-bootstrap/Carousel';
import { CarouselItemProps as BaseCarouselItemProps } from 'react-bootstrap/CarouselItem';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export const CAROUSEL_NEXT_LABEL_TEXT: string;
export const CAROUSEL_PREV_LABEL_TEXT: string;

declare interface CarouselProps extends BaseCarouselProps {}

declare interface CarouselItemProps extends BaseCarouselItemProps {}

declare interface CarouselCaptionProps extends BsPrefixProps {}

declare const Carousel: React.ForwardRefExoticComponent<CarouselProps> & {
    Item: React.ForwardRefExoticComponent<CarouselItemProps>;
    Caption: React.FC<CarouselCaptionProps>;
};

export default Carousel;
