{
    /**
     * Class FrequentlyAskedQuestions
     * @author Stephen Dueñas
     */
    class FrequentlyAskedQuestions {
        
        /**
         * Initialize
         */
        init() {
            const oDomSelectors = this.renderDomSelector();
            this.renderEventListeners(oDomSelectors);
        }

        /**
         * Render Dom Selector
         * @returns object
         */
        renderDomSelector() {
            return {
                oLists: document.querySelectorAll('li'),
            };
        }

        /**
         * Render Event Listeners
         * @param {object} oDomSelectors 
         */
        renderEventListeners(oDomSelectors) {
            oDomSelectors.oLists.forEach((oDomList) => { 
                oDomList.addEventListener('click', (oEvent) => {
                    if (this.isQuestionClicked(oEvent)) {
                        this.toggleAnswer(oDomList);
                    }
                });
            });
        }

        /**
         * Check if question portion is clicked.
         * @param {object} oEvent 
         */
        isQuestionClicked(oEvent) {
            return (oEvent.target.matches('a') || oEvent.target.matches('span') || oEvent.target.matches('img'));
        }

        /**
         * Toggle FAQ Answer
         * @param {object} oDomList 
         */
        toggleAnswer(oDomList) {
            oDomList.children[0].classList.toggle('bold');
            oDomList.children[0].children[0].classList.toggle('rotate-arrow');
            oDomList.children[1].classList.toggle('none');
        }
    }

    const oFAQ = new FrequentlyAskedQuestions();
    oFAQ.init();
}