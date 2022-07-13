(() => {
    const newQuickReply = "Muito legal, mas qual o salário ?";

    const getQuickReplies = () => {
        const quickReplies = conversationsQuickReplies.querySelectorAll(".msg-s-message-list__quick-reply");
        return quickReplies;
    }

    const addNewQuickReply = () => {
        console.log("Adicionando nova resposta rápida...");

        const quickReplies = getQuickReplies();
        const newQuickReplyElement = document.createElement("div");
        newQuickReplyElement.classList.add("msg-s-message-list__quick-reply");
        newQuickReplyElement.innerHTML = newQuickReply;
        quickReplies[0].after(newQuickReplyElement);
    }
})();