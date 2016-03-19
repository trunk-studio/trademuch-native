/**
 * # FormButton-test.js
 *
 * This class tests that the form button displays correctly
 *
 * *Note:* if you want to understand the structures here, add a
 * ```console.log``` and then ```npm test```.
 */
'use strict';
console.log('=== start test ===');

jest.autoMockOff();

/**
* ## Imports
 */

const React = require('react-native');
const { View } = React;

const utils = require('react-addons-test-utils');

/**
 * ## Under test
 * class under test
 */
jest.dontMock('../postListItem');


var PostListItem = require('../postListItem');


/**
 * ## Test
 */
describe('postListItem', () => {
  console.log('=== test postListItem ===');
  let postListItem;

  const postListItemProps = {};

  function renderPostListItem(props) {
    const renderer = utils.createRenderer();
    renderer.render(<PostListItem {...props}/>);
    const output = renderer.getRenderOutput();

    return {
      props,
      output,
      renderer
    };
  }
  /**
   * ### beforeEach
   * before each test, render the form button with the default props
   */
  beforeEach(() => {
    console.log('=== beforeEach ===');
    postListItem = renderPostListItem(postListItemProps);
  });

  it('should be fine', () => {
    const {output} = postListItem;
    expect(output.type.toString()).toEqual(View.toString());
  });

  // /**
  //  * ### it should display text
  //  * the button should be disabled and have the correct text
  //  */
  // it('should display text', () => {
  //   const {output} = formButton;
  //   const button = output.props.children;
  //   expect(button.props.isDisabled).toEqual(buttonProps.isDisabled);
  //   const buttonText = button.props.children;
  //   expect(buttonText).toEqual(buttonProps.buttonText);
  // });
});//describe FormButton
