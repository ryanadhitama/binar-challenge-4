var AllCar = null

const getAllCar = () => {
    fetch('/getcars')
        .then((response) => response.json())
        .then((hasil) => {
            const body = document.getElementById('body')
            for (let i = 0; i < hasil.length; i++) {
                const Car = document.createElement('div')
                Car.innerHTML =
                `<div style="width: 333px; box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; height: fit-content; margin-bottom: 35px;">
                    <img src=${hasil[i].image} alt="" style="width: 100%; height: 222px; border-radius: 3px;">
                    <p style="margin: 16px 0px 8px 0px; font-family: 'Helvetica'; font-style: normal; font-weight: 400;font-size: 14px; line-height: 20px;">${hasil[i].type}</p>
                    <h5 style="margin-bottom: 8px; font-family: 'Helvetica'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px;">${hasil[i].rentPerDay} / hari</h5>
                    <h6 style="height: 60px; margin-bottom: 16px; font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px;">${hasil[i].description}</h6>
                    <div style="display: flex; ">
                        <div style="margin-right: 8px; padding: 0px;"> 
                            <i class="bi bi-people" aria-hidden="true" style="font-size:24px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${hasil[i].capacity} orang
                        </p>
                    </div>
                    <div style="display: flex; ">
                        <div style="margin-right: 12px; padding: 2px 0px;"> 
                            <i class="bi bi-gear" aria-hidden="true" style="font-size:20px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${hasil[i].transmission}
                        </p>
                    </div>
                    <div style="display: flex;">
                        <div style="margin-right: 12px; padding: 2px 0px;"> 
                            <i class="bi bi-calendar4" aria-hidden="true" style="font-size:20px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${hasil[i].year}
                        </p>
                    </div>
                    <button style="margin-top:8px; width: 100%; padding: 14px 0px; background: #5CB85F; border-radius: 3px; border: none; color: white; text-align: center; text-decoration: none; font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px; font-family: 'Helvetica'; line-height: 20px;">
                        Pilih Mobil
                    </button>
                </div>`

                body.appendChild(Car)
                
            }
            AllCar = hasil
        })
}

getAllCar()

const filterCar = (char) => {

    let newCar = AllCar.filter(cars => cars.available.includes(char)); // && cars.available == true
    const body = document.getElementById('body')
    body.innerHTML = ''
            newCar.forEach((element, id) => {
                const Car = document.createElement('div')
                Car.innerHTML = 
                `<div style="width: 333px; box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; height: fit-content; margin-bottom: 35px;">
                    <img src=${element.image} alt="" style="width: 100%; height: 222px; border-radius: 3px;">
                    <p style="margin: 16px 0px 8px 0px; font-family: 'Helvetica'; font-style: normal; font-weight: 400;font-size: 14px; line-height: 20px;">${element.type}</p>
                    <h5 style="margin-bottom: 8px; font-family: 'Helvetica'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px;">${element.rentPerDay} / hari</h5>
                    <h6 style="height: 60px; margin-bottom: 16px; font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px;">${element.description}</h6>
                    <div style="display: flex; ">
                        <div style="margin-right: 8px; padding: 0px;"> 
                            <i class="bi bi-people" aria-hidden="true" style="font-size:24px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${element.capacity} orang
                        </p>
                    </div>
                    <div style="display: flex; ">
                        <div style="margin-right: 12px; padding: 2px 0px;"> 
                            <i class="bi bi-gear" aria-hidden="true" style="font-size:20px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${element.transmission}
                        </p>
                    </div>
                    <div style="display: flex;">
                        <div style="margin-right: 12px; padding: 2px 0px;"> 
                            <i class="bi bi-calendar4" aria-hidden="true" style="font-size:20px;"></i>
                        </div> 
                        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
                            ${element.year}
                        </p>
                    </div>
                    <button style="margin-top:8px; width: 100%; padding: 14px 0px; background: #5CB85F; border-radius: 3px; border: none; color: white; text-align: center; text-decoration: none; font-family: 'Helvetica';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px; font-family: 'Helvetica'; line-height: 20px;">
                        Pilih Mobil
                    </button>
                </div>`
                
                
                
                
                // `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
                // <h1>${element.manufacture} ${element.model} - ${element.year}</h1>
                // <img
                // class="car_image"
                //     src="./asset/${id %2 ==0 ? 'menu2': 'menu1'}.png"
                // />
                // <p style="text-align: center;color: aliceblue; font-size: 20px;">${element.description}</p>
                // </div>`

                body.appendChild(Car)
            });
}




