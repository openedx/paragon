import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './index';

describe('Avatar', () => {
  it('renders in all sizes', () => {
    const tree = renderer.create((
      <>
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar />
        <Avatar size="lg" />
        <Avatar size="xl" />
        <Avatar size="xxl" />
        <Avatar size="huge" />
      </>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a default avatar url', () => {
    const testRenderer = renderer.create(<Avatar />);
    const testInstance = testRenderer.root;
    // test-file-stub is what our fileMock.js returns for all images and svgs
    expect(testInstance.findByType('img').props.src).toBe('test-file-stub');
  });

  it('can set a custom avatar url', () => {
    const profileUrl = 'https://example.com/profile.png';
    const testRenderer = renderer.create(<Avatar src={profileUrl} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('img').props.src).toBe(profileUrl);
  });

  it('can have alt text', () => {
    const altText = 'Casey';
    const testRenderer = renderer.create(<Avatar alt={altText} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('img').props.alt).toBe(altText);
  });
});
