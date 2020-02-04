const express= require('express');
const router=express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:'Order were featched'
    });
});

router.post('/', (req,res,next)=>{
    const order={
        productId:req.body.productId,
        quantity:req.body.quantity
    };
    res.status(201).json({
        message:'Order was created'
    });
});

router.get('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message:'Order details',
        orderId: req.params.orderId
    });
});
router.delete('/', (req,res,next)=>{
    res.status(200).json({
        message:'Order deleted'
    });
});

module.exports = router;