let sum = 5
let isaccepted = false

window.addEventListener('load', (event) => {
    document.querySelector("#oos").style.display = 'none'

    document.querySelector("#decpencils").addEventListener("click", async () => {
        if (parseInt(document.querySelector("#amountofpencils").textContent) > 1)
        {
            document.querySelector("#amountofpencils").textContent = parseInt(document.querySelector("#amountofpencils").textContent) - 1
            sum -= 5
            document.querySelector("#sum").textContent = `${sum} RUB`
        }
        console.log("minus")

    })
    document.querySelector("#incpencils").addEventListener("click", async () => {
        document.querySelector("#amountofpencils").textContent = parseInt(document.querySelector("#amountofpencils").textContent) + 1
        sum += 5
        document.querySelector("#sum").textContent = `${sum} RUB`
        console.log("plus")
    })
    document.querySelector("#order").addEventListener("click", async () => {
        if (!isaccepted) {openPopup()}
        else {realorder()}

        // document.querySelector("#oos").style.display = 'block'
        // window.open(`https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPtpmQHPFMpV52JqRU5S65HvaPekUTSUTgxJUxgsSukcKQYaPD9GMAVhXiPYDDcjm522XHGqjYLdAPk7JjZT8ur2e2Cu9rFqP5HHnjm6qsR&amount=${sum}&successUrl=&failUrl=&comment=&extras%5BwidgetAlias%5D=andrei-euu4_ex9uu&extras%5BwidgetReferrer%5D=&extras%5BthemeCode%5D=Andrei-EuU4_Ex9uu`)
        console.log("order")
    })
})

function realorder()
{
    window.open(`https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPtpmQHPFMpV52JqRU5S65HvaPekUTSUTgxJUxgsSukcKQYaPD9GMAVhXiPYDDcjm522XHGqjYLdAPk7JjZT8ur2e2Cu9rFqP5HHnjm6qsR&amount=${sum}&successUrl=&failUrl=&comment=&extras%5BwidgetAlias%5D=andrei-euu4_ex9uu&extras%5BwidgetReferrer%5D=&extras%5BthemeCode%5D=Andrei-EuU4_Ex9uu`)
}

function openPopup() {
    // Открывает всплывающее окно и блокирует прокрутку фона
    document.body.style.overflow = 'hidden';
    document.getElementById('popup').style.display = 'block';
  }

  function closePopup() {
    // Закрывает всплывающее окно и восстанавливает прокрутку фона
    document.body.style.overflow = 'auto';
    document.getElementById('popup').style.display = 'none';
  }