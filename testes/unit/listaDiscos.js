describe('Catalogo de Discos', function () {

    describe('DiscosController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new DiscosController(this.$scope);
        });

        describe('adicionaDisco', function () {
            it('adicionar um novo disco', function () {
                this.$scope.disco = {};
                this.$scope.disco.artista = 'jonas';
                this.$scope.disco.album = 'cantigas';
                this.$scope.disco.genero = 'gospel';
                this.$scope.disco.ano = '2014';
                expect(this.$scope.discos[2].artista).toBe('jonas');
                expect(this.$scope.discos[2].album).toBe('cantigas');
                expect(this.$scope.discos[2].genero).toBe('gospel');
                expect(this.$scope.discos[2].ano).toBe('2014');
            });
        });

    });

});
