import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: 'data:image/jpeg;base64,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',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://2.bp.blogspot.com/-sMjNO09FcT8/Uw4HYCvu40I/AAAAAAAAEGI/0_I1vD-V11c/s1600/nature-desktop-backgrounds-images-wallpapers-8.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'http://2.bp.blogspot.com/-sMjNO09FcT8/Uw4HYCvu40I/AAAAAAAAEGI/0_I1vD-V11c/s1600/nature-desktop-backgrounds-images-wallpapers-8.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.caption}
        >
          <div style={{ background: `url(${item.src}) no-repeat center center`, backgroundSize: 'cover', width: '100%', height: 300 }}  alt={item.altText}/>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
      </div>
      
    );
  }
}


export default Example;