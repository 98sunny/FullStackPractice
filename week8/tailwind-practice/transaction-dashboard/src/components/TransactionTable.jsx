export function TransactionTable({orderId, status, transactionId, refundDate, orderAmount}){
    const transactionData=[
        {"orderId":1, 
        "status":"Success", 
        "transactionId": 1112222, 
        "refundDate":"Today, 08:45 PM", 
        "orderAmount": "$120.00"
    },
    {"orderId":1, 
        "status":"Processing", 
        "transactionId": 1112222, 
        "refundDate":"Today, 08:45 PM", 
        "orderAmount": "$120.00"
    },
    {"orderId":1, 
        "status":"Success", 
        "transactionId": 1112222, 
        "refundDate":"Today, 08:45 PM", 
        "orderAmount": "$120.00"
    },
    {"orderId":1, 
        "status":"Failed", 
        "transactionId": 1112222, 
        "refundDate":"Today, 08:45 PM", 
        "orderAmount": "$120.00"
    },
    ]
    return <div><table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className=" text-xs text-gray-700 text-left uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr >
        <th>ORDER ID</th>
        <th>STATUS</th>
        <th>TRANSACTION ID</th>
        <th>REFUND DATE</th>
        <th>ORDER AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      {transactionData.map((transaction)=>
        <tr className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20">
        <td className="p-5 ">{transaction.orderId}</td>
        <td className="flex items-center ">
        { (transaction.status === "Success") && <div className='h-2.5 w-2.5 mr-2 rounded-full bg-green-500'/>}
        { (transaction.status === "Processing") && <div className='h-2.5 w-2.5 rounded-full bg-slate-400'/>}
        { (transaction.status === "Failed") && <div className='h-2.5 w-2.5 rounded-full bg-red-500'/>}
        {transaction.status}

        </td>
        <td>{transaction.transactionId}</td>
        <td>{transaction.refundDate}</td>
        <td>{transaction.orderAmount}</td>
      </tr>
      )}
      
    </tbody>
  </table></div>
}


// py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20

// p-5  border border-solid 
