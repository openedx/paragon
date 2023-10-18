import React from 'react';
import renderer from 'react-test-renderer';
import AvatarButton from '.';

describe('AvatarButton', () => {
  it('renders in all sizes', () => {
    const tree = renderer.create((
      <>
        <AvatarButton size="sm">Casey</AvatarButton>
        <AvatarButton>Casey</AvatarButton>
        <AvatarButton size="lg">Casey</AvatarButton>
        <AvatarButton showLabel={false} size="sm">Casey</AvatarButton>
        <AvatarButton showLabel={false}>Casey</AvatarButton>
        <AvatarButton showLabel={false} size="lg">Casey</AvatarButton>
      </>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a default avatar url', () => {
    const testRenderer = renderer.create(<AvatarButton>Casey</AvatarButton>);
    const testInstance = testRenderer.root;
    // test-file-stub is what our fileMock.js returns for all images and svgs
    expect(testInstance.findByType('img').props.src).toBe('test-file-stub');
  });

  it('can set a custom avatar url', () => {
    const profileUrl = 'https://example.com/profile.png';
    const testRenderer = renderer.create(<AvatarButton src={profileUrl}>Casey</AvatarButton>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('img').props.src).toBe(profileUrl);
  });
});
