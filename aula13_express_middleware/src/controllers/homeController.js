exports.paginaInicial = (req, res, next) => {

  console.log('Respondendo ao Cliente');
  res.render('index');
 return;
};

exports.trataPost = (req, res,next) => {
  res.send(req.body);
  return;
};
