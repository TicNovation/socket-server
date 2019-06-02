import {Router, Request, Response} from 'express';

const router = Router();

router.get('/api/mensajes', (req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'Todo bien!'
    });
});

router.post('/api/mensajes', (req:Request, res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok:true,
        cuerpo,
        de
    });
});

router.post('/api/mensajes/:id', (req:Request, res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id
    });
});


export default router;