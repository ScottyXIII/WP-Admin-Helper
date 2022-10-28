javascript:(async function () {
  const keyDataSelectors = {
    group1input1: '#fm-key_data-0-column0-0-group_one-0-field_one-0',
    group1input2: '#fm-key_data-0-column0-0-group_one-0-field_two-0',
    group2input1: '#fm-key_data-0-column0-0-group_two-0-field_one-0',
    group3input1: '#fm-key_data-0-column1-0-group_three-0-field_one-0',
    group3input2: '#fm-key_data-0-column1-0-group_three-0-field_two-0',
    group3input3: '#fm-key_data-0-column1-0-group_three-0-field_three-0',
    group3input4: '#fm-key_data-0-column1-0-group_three-0-field_four-0',
    group4input1: '#fm-key_data-0-column2-0-group_four-0-field_one-0'
  }

  const selectors = {
    postType: '#post_type',
    title: '#title',
    thumbnailButton: '.acf-field-post-hero-thumbnail .button',
    mediaLibraryTab: '.media-frame-router .media-menu-item:nth-child(2)',
    firstImage: '.attachments-browser li:not([aria-label="Placeholder"])',
    selectButton: '.media-toolbar-primary.search-form > button',
    description: '.fm-description textarea',
    wysiwygTextTab: '.wp-editor-tabs #content-html',
    wysiwygVisualTab: '.wp-editor-tabs #content-tmce',
    mainContent: '#content',
    addMediaBtn: '#insert-media-button',
    keyData: keyDataSelectors,
    syndicationAppleNews: '#fm_meta_box_syndication #fm-syndication-0-27',
    syndicationFacebook: '#fm_meta_box_syndication #fm-syndication-0-28'
  };

  const event = document.createEvent("HTMLEvents");
  event.initEvent("input", false, true);

  const elementExists = selector => document.querySelector(selector) !== null;
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const ucf = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  const postType = ucf(document.querySelector(selectors.postType).value);

  const waitForExist = async selector => {
    if (elementExists(selector)) {
      return true;
    }
    await pause(200);
    return waitForExist(selector);
  };

  async function click(selector) {
    await waitForExist(selector);
    const element = document.querySelector(selector);
    element.click();
  }

  function setValue(selector, value) {
    const element = document.querySelector(selector);
    element.value = element.value === '' ? value : element.value;
    element.dispatchEvent(event);
  }

  function setTitle() {
    const datetime = new Date().toISOString().replace('T', ' ').split('.')[0];
    setValue(selectors.title, `Test ${postType} ${datetime}`);
  }

  function createDummyText(numParagraphs) {
    let dummyText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.';
    let content = '';
    for (let x = 0; x < numParagraphs; x++) {
      content += `${dummyText} <br> <br>`;
    }
    return content;
  }

  function setDescription() {
    setValue(selectors.description, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.');
  }

  async function setThumbnailImage() {
    await click(selectors.thumbnailButton);
    await click(selectors.mediaLibraryTab);
    await click(selectors.firstImage);
    await click(selectors.selectButton);
  }

  async function setContent() {
    await click(selectors.wysiwygTextTab);
    setValue(selectors.mainContent, createDummyText(5));
    await click(selectors.addMediaBtn);
    await click(selectors.mediaLibraryTab);
    await click(selectors.firstImage);
    await click(selectors.selectButton);
  }

  function setKeyData() {
    setValue(selectors.keyData.group1input1, 1);
    setValue(selectors.keyData.group1input2, 2);
    setValue(selectors.keyData.group2input1, 3);
    setValue(selectors.keyData.group3input1, 4);
    setValue(selectors.keyData.group3input2, 5);
    setValue(selectors.keyData.group3input3, 6);
    setValue(selectors.keyData.group3input4, 7);
    setValue(selectors.keyData.group4input1, 8);
  }

  function setGridView() {
    //TODO
  }
  
  function setRelatedContent() {
   //TODO
  }

  function setTagManager() {
    //TODO
  }

  function setDisplayInformation() {
    //TODO
  }

  async function setSyndication() {
    await click(selectors.syndicationAppleNews);
    await click(selectors.syndicationFacebook); 
  }

  async function init() {
    setTitle();
    setDescription();
    await setThumbnailImage();
    await setContent();
    setKeyData();
    await setSyndication();
  }

  await init();
})();
