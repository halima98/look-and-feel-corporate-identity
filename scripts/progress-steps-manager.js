// This base class extends each and every html element
// 'connectedCallback' is the  method of the base class that will work when we connect it to a html page
// when its connected to an html page it will change the content of the page
// the content in this methode is the content that we want for the progress segement
// to change the content of an HTML element the inner html field will be accessed
// the written section is what the content should be.
class reusableProgressTracker extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="steps-container">
        <div class="progress-segment"></div>
        <div class="step first"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step"></div>
        <div class="step last"></div>
      </section>
    `;
  }
}

customElements.define("progress-tracker", reusableProgressTracker);
