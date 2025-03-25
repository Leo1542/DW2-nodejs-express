const datas = new Date()

const exibirDatas = () => {
    datas.setDate(datas.getDate() + 3)

    datas.setMonth(datas.getMonth()+2)

    datas.setFullYear(datas.getFullYear()+1)

    console.log(`${datas.getDate()}/${datas.getMonth()}/${datas.getFullYear()}`)
}

exibirDatas()