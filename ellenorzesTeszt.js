import Jatekter from "./Jatekter.js";

QUnit.module("jatek getVizszintes teszteles", function (hooks){
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("lista letezik e", function (assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.ok(jatekter.getVizszintes(), "létezik a metodus");
    });

    QUnit.test("x x x nincs tele", function (assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", " ", "O", " "];
        assert.equal(jatekter.getVizszintes(), "XXX@ O @ O @");
    });

    QUnit.test("o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "O", "O", "X", " ", "X", " ", "X", " "];
        assert.equal(jatekter.getVizszintes(), "OOO@X X@ X @");
    });

    QUnit.test("nincs nyertes tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getVizszintes(), "OOX@XXO@OXX@");
    });

    QUnit.test("van nyertes tele", function (assert) {
        jatekter.lista = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getVizszintes(), "XOO@XXO@OXX@");
    });

    QUnit.test("veletlen elrendezes", function (assert) {
        jatekter.lista = ["O", "O", "X", " ", " ", "X", "O", " ", "X"];
        assert.equal(jatekter.getVizszintes(), "OOX@  X@O X@");
    });

    QUnit.test("atlo x x x nincs tele", function (assert) {
        jatekter.lista = ["O", " ", "X", " ", "X", "O", "X", "O", " "];
        assert.equal(jatekter.getVizszintes(), "O X@ XO@XO @");
    });

    QUnit.test("atlo o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "X", " ", " ", "O", " ", "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "OX @ O @XXO@");
    });

    QUnit.test("atlo x x x tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "X", "O", "X"];
        assert.equal(jatekter.getVizszintes(), "OOX@XXO@XOX@");
    });

    QUnit.test("atlo o o o tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getVizszintes(), "OOX@XOX@XXO@");
    });
});

QUnit.module("jatek getAtlo teszteles", function (hooks){
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("lista letezik e", function (assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.ok(jatekter.getAtlo(), "létezik a metodus");
    });

    QUnit.test("x x x nincs tele", function (assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", " ", "O", " "];
        assert.equal(jatekter.getAtlo(), "XO @XO ");
    });

    QUnit.test("o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "O", "O", "X", " ", "X", " ", "X", " "];
        assert.equal(jatekter.getAtlo(), "O  @O  ");
    });

    QUnit.test("nincs nyertes tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getAtlo(), "OXX@XXO");
    });

    QUnit.test("van nyertes tele", function (assert) {
        jatekter.lista = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getAtlo(), "XXX@OXO");
    });

    QUnit.test("veletlen elrendezes", function (assert) {
        jatekter.lista = ["O", "O", "X", " ", " ", "X", "O", " ", "X"];
        assert.equal(jatekter.getAtlo(), "O X@X O");
    });

    QUnit.test("atlo x x x nincs tele", function (assert) {
        jatekter.lista = ["O", " ", "X", " ", "X", "O", "X", "O", " "];
        assert.equal(jatekter.getAtlo(), "OX @XXX");
    });

    QUnit.test("atlo o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "X", " ", " ", "O", " ", "X", "X", "O"];
        assert.equal(jatekter.getAtlo(), "OOO@ OX");
    });

    QUnit.test("atlo x x x tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "X", "O", "X"];
        assert.equal(jatekter.getAtlo(), "OXX@XXX");
    });

    QUnit.test("atlo o o o tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getAtlo(), "OOO@XOX");
    });
});

QUnit.module("jatek getFuggoleges teszteles", function (hooks){
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("lista letezik e", function (assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.ok(jatekter.getFuggoleges(), "létezik a metodus");
    });

    QUnit.test("x x x nincs tele", function (assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", " ", "O", " "];
        assert.equal(jatekter.getFuggoleges(), "X  @XOO@X  @");
    });

    QUnit.test("o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "O", "O", "X", " ", "X", " ", "X", " "];
        assert.equal(jatekter.getFuggoleges(), "OX @O X@OX @");
    });

    QUnit.test("nincs nyertes tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getFuggoleges(), "OXO@OXX@XOX@");
    });

    QUnit.test("van nyertes tele", function (assert) {
        jatekter.lista = ["X", "O", "O", "X", "X", "O", "O", "X", "X"];
        assert.equal(jatekter.getFuggoleges(), "XXO@OXX@OOX@");
    });

    QUnit.test("veletlen elrendezes", function (assert) {
        jatekter.lista = ["O", "O", "X", " ", " ", "X", "O", " ", "X"];
        assert.equal(jatekter.getFuggoleges(), "O O@O  @XXX@");
    });

    QUnit.test("atlo x x x nincs tele", function (assert) {
        jatekter.lista = ["O", " ", "X", " ", "X", "O", "X", "O", " "];
        assert.equal(jatekter.getFuggoleges(), "O X@ XO@XO @");
    });

    QUnit.test("atlo o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "X", " ", " ", "O", " ", "X", "X", "O"];
        assert.equal(jatekter.getFuggoleges(), "O X@XOX@  O@");
    });

    QUnit.test("atlo x x x tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "X", "O", "X", "O", "X"];
        assert.equal(jatekter.getFuggoleges(), "OXX@OXO@XOX@");
    });

    QUnit.test("atlo o o o tele", function (assert) {
        jatekter.lista = ["O", "O", "X", "X", "O", "X", "X", "X", "O"];
        assert.equal(jatekter.getFuggoleges(), "OXX@OOX@XXO@");
    });
});

QUnit.module("jatek ellenorzes teszteles", function (hooks){
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    });

    QUnit.test("lista letezik e", function (assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.ellenorzes(), "");
    });

    QUnit.test("x x x nincs tele", function (assert) {
        jatekter.lista = ["X", "X", "X", " ", "O", " ", " ", "O", " "];
        assert.equal(jatekter.ellenorzes(), "X");
    });

    QUnit.test("o o o nincs tele", function (assert) {
        jatekter.lista = ["O", "O", "O", "X", " ", "X", " ", "X", " "];
        assert.equal(jatekter.ellenorzes(), "O");
    });

    QUnit.test("nincs nyertes tele", function (assert) {
        jatekter.lista = [" ", "O", "X", " ", "X", " ", "O", "X", " "];
        assert.equal(jatekter.ellenorzes(), "");
    });

});