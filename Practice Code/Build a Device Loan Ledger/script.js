const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower){
    const updatedLedger = JSON.parse(JSON.stringify(ledger));

    if(!updatedLedger[assetTag]){
        return {
            ledger: ledger,
            message: `Device ${assetTag} was not found.`
        };
    }

    if(updatedLedger[assetTag].status === "CheckedOut"){
        return {
            ledger: ledger,
            message: `Device ${assetTag} is already checked out.`
        };
    }

    updatedLedger[assetTag].borrower.name = borrower.name;
    updatedLedger[assetTag].borrower.email = borrower.email;
    updatedLedger[assetTag].status = "CheckedOut";

    return {
        ledger: updatedLedger,
        message: `Device ${assetTag} checked out to ${borrower.name}.`
    };
}

function checkinDevice(ledger, assetTag){
    const updatedLedger = JSON.parse(JSON.stringify(ledger));

    if(!updatedLedger[assetTag]){
        return {
            ledger: ledger,
            message: `Device ${assetTag} was not found.`
        };
    }

    updatedLedger[assetTag].borrower.name = "";
    updatedLedger[assetTag].borrower.email = "";
    updatedLedger[assetTag].dueDate = "";
    updatedLedger[assetTag].status = "CheckedIn";

    return {
        ledger: updatedLedger,
        message: `Device ${assetTag} checked in.`
    };
}

function listOverdueDevices(ledger, today){
    let overdueDevices = [];

    for(const assetTag in ledger){
        const device = ledger[assetTag];

        if(
            device.status === "CheckedOut" &&
            device.dueDate !== "" &&
            dateToNumber(device.dueDate) < dateToNumber(today)
        ){
            overdueDevices.push(device);
        }
    }

    overdueDevices.sort((a,b) => {
        return dateToNumber(a.dueDate) - dateToNumber(b.dueDate);
    });

    return overdueDevices;
}

function dateToNumber(dateString){
    const parts = dateString.split("/");
    const month = Number(parts[0]);
    const day = Number(parts[1]);
    const year = Number(parts[2]);

    return year*1000+month*100+day;
}

function serializeLedger(ledger){
    return JSON.stringify(ledger);
}

function loadLedger(json){
    return JSON.parse(json);
}