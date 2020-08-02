export default async function () {
  this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs'),
    team: await this.load('./templates/catalog/team.hbs'),
  };

  const data = Object.assign({}, this.app.userData);
  data.teams = [
    {
      _id: '123123',
      name: 'Microsoft',
      comment: 'Some comment',
    },
    {
      _id: '321',
      name: 'Apple',
      comment: 'Some comment2',
    },
    {
      _id: '222',
      name: 'Android',
      comment: 'Some comment3',
    },
  ];

  this.partial('./templates/catalog/teamCatalog.hbs', data);
}
