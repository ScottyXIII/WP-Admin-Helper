javascript:(async function () {
  
  class PostBuilder {
  
    constructor(selectors) {
      this.selectors = selectors;
      this.supports = 'Post';
    }

    getSupports() {
      return this.supports;
    }

    setTitle() {
      const datetime = new Date().toISOString().replace('T', ' ').split('.')[0];
      setValue(selectors.title, `Test ${postType} ${datetime}`);
    }

    createDummyText(numParagraphs) {
      let dummyText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.';
      let content = '';
      for (let x = 0; x < numParagraphs; x++) {
        content += `${dummyText} <br> <br>`;
      }
      return content;
    }

    setDescription() {
      setValue(selectors.description, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.');
    }

    async setThumbnailImage() {
      await click(selectors.thumbnailButton);
      await click(selectors.mediaLibraryTab);
      await click(selectors.firstImage);
      await click(selectors.selectButton);
    }

    async setContent() {
      await click(selectors.wysiwygTextTab);
      setValue(selectors.mainContent, this.createDummyText(5));
      //await click(selectors.addMediaBtn);
      //await click(selectors.mediaLibraryTab);
      //await click(selectors.firstImage);
      //await click(selectors.selectButton);
    }

    async setSyndication() {
      await click(selectors.syndicationAppleNews);
      await click(selectors.syndicationFacebook); 
    }

    setKeyData() {
      setValues(selectors.keyDataInputs);
      setValues(selectors.keyDataTextAreas, 'string value - ');
    }

    async setGridView() {
      await click(selectors.gridViewCheckBoxes);
    }
    
    setRelatedContent() {
     //TODO
    }

    setTagManager() {
      //TODO
    }

    setDisplayInformation() {
      setValue(selectors.displayInfoLabel, 'display information Label value');
      setValue(selectors.displayInfoHeadline, 'display information Headline value');
    }

    setSeoData() {
      setValue(selectors.seoMetaTitle, 'meta title value');
      setValue(selectors.seoMetaDescription, 'meta description value');
      setValue(selectors.seoMetaGoogleNewKeyWords, 'Google, Key, Words');
    }

    async build() {
      this.setTitle();
      this.setDescription();
      await this.setThumbnailImage();
      await this.setContent();
      this.setKeyData();
      await this.setSyndication();
      await this.setGridView(); 
      this.setSeoData();
      this.setDisplayInformation();
    }
  }

  class HowToBuilder extends PostBuilder {
    
    constructor(selectors) {
      super(selectors);
      this.supports = 'How_to';
    }

    getSupports() {
      return this.supports;
    }

    setYouWillNeed() {
      setValue(selectors.youWillNeedMaterial, "A Material");
      setValue(selectors.youWillNeedQuantiy, "100 nm");
      setValue(selectors.youWillNeedNote, "You're probably going to need a microscope with A Material");
    }

    setHowToDetails() {
      setValue(selectors.howToDetailsTotalHours, "2");
      setValue(selectors.howToDetailsTotalMins, 30);
      setValue(selectors.howToDetailsTimeNote, "This is a time note");
      setValue(selectors.howToDetailsEstimatedCost, 999);
    }

    async setInstructions() {
      await click(selectors.instructionsTextTab);
      setValue(selectors.instructionsContent, this.createDummyText(5));
      await click(selectors.instructionsVisualTab);
    }

    async setEndSummary() {
      await click(selectors.endSummaryTextTab);
      setValue(selectors.endSummary, this.createDummyText(5));
      await click(selectors.endSummaryVisualTab);
    }

    async build() {
      this.setTitle();
      this.setDescription();
      await this.setThumbnailImage();
      this.setYouWillNeed();
      await this.setGridView();
      await this.setContent();
      this.setHowToDetails();
      await this.setInstructions();
      await this.setEndSummary();
      this.setSeoData();
      this.setDisplayInformation();
    }

  }

  class ListBuilder extends PostBuilder {}
  class CompetitionsBuilder extends PostBuilder {}
  class GLossaryBuilder extends PostBuilder {}
  class OfferBuilder extends PostBuilder {}
  class PlantBuilder extends PostBuilder {}
  class VenueBuilder extends PostBuilder {}
  class ReviewBuilder extends PostBuilder {}
  class RecipeBuilder extends PostBuilder {}
  class StepByStepBuilder extends PostBuilder {}
  class Builder extends PostBuilder {}

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
    keyDataInputs: '.fm-key_data-wrapper input',
    keyDataTextAreas: '.fm-key_data-wrapper textArea',
    gridViewCheckBoxes: '.fm-im-grid-group input[type="checkbox"]',
    syndicationAppleNews: '#fm_meta_box_syndication #fm-syndication-0-27',
    syndicationFacebook: '#fm_meta_box_syndication #fm-syndication-0-28',
    displayInfoLabel: '#fm-display-0-label-0',
    displayInfoHeadline: '#fm-display-0-headline-0',
    seoMetaTitle: '#fm-seometa-0-title-0',
    seoMetaDescription: '#fm-seometa-0-description-0',
    seoMetaGoogleNewKeyWords: '#fm-seometa-0-google_news-0',
    //How to selectors
    youWillNeedMaterial: '#fm-you_will_need-0-im-requirements-list-0-list-0-item_materials-0',
    youWillNeedQuantiy: '#fm-you_will_need-0-im-requirements-list-0-list-0-item_quantity_unit-0',
    youWillNeedNote: '#fm-you_will_need-0-im-requirements-list-0-list-0-item_note-0',
    howToDetailsTotalHours: '#fm-howToTime-0-time_inputs-0-hours-0',
    howToDetailsTotalMins: '#fm-howToTime-0-time_inputs-0-mins-0',
    howToDetailsTimeNote: '#fm-howToTime-0-time_note-0',
    howToDetailsEstimatedCost: '#fm-howToTime-0-estimated_cost-0',
    instructionsContent: '#fm-how_to_method-0-list-0-note-0', 
    instructionsVisualTab: '#fm-how_to_method-0-list-0-note-0-tmce',
    instructionsTextTab: '#fm-how_to_method-0-list-0-note-0-html',
    endSummary: '#fm-end_summary-0',
    endSummaryVisualTab: '#fm-end_summary-0-tmce',
    endSummaryTextTab: '#fm-end_summary-0-html',
  };

  const event = document.createEvent("HTMLEvents");
  event.initEvent("input", false, true);

  const elementExists = selector => document.querySelector(selector) !== null;
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const ucf = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  const postType = ucf(document.querySelector(selectors.postType).value);
  let postBuilders = [new PostBuilder(selectors),new HowToBuilder(selectors)];

  const waitForExist = async selector => {
    if (elementExists(selector)) {
      return true;
    }
    await pause(200);
    return waitForExist(selector);
  };

  async function click(selector) {
    await waitForExist(selector);
    document.querySelectorAll(selector).forEach((button) => {
      button.click();
    });
  }

  function setValue(selector, value) {
    const element = document.querySelector(selector);
    element.value = element.value === '' ? value : element.value;
    element.dispatchEvent(event);
  }

  function setValues(selector, value = null) {
    elements = document.querySelectorAll(selector);
    let count = 1;
    for (const element of elements) {
      element.value = value === null ? count : value + count;
      count++;
      element.dispatchEvent(event);
    }
  }

  function getPostBuilder() {
    for (const builder of postBuilders) {
      if (builder.supports === postType) {
        return builder;
      }
    }
    return null;
  }

  async function postBuilderDelegate() {
    const builder = getPostBuilder();
    if (builder === null) {
      alert('no post builder avalible for post type of ' + postType);
      return;
    } 
    await builder.build();
  }

  await postBuilderDelegate();
})();
