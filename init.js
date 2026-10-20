const sequelize = require('./database');
const { User, Post } = require('./models/index');

async function init() {
    try {
        await sequelize.authenticate();
        console.log('Соединение установлено.');

        await sequelize.sync({ force: true });
        console.log('Таблицы синхронизированы.');

        const user = await User.create({
            name: 'A&S',
            email: 'test@example.com'
        });
        console.log('Создан пользователь:', user.toJSON());

        const newPost = await user.createPost({
            title: 'New Post!',
            content: 'Hello, it`s me, Mario!',
            publishedAt: new Date()
        });
        console.log('Создан пост:', newPost.toJSON());

        const userWithPosts = await User.findByPk(user.id, {
            include: [{ model: Post, as: 'posts' }]
        });

        console.log('\nПользователи с постами:');
        console.log(JSON.stringify(userWithPosts, null, 2));

    } catch (error) {
        console.error('Ошибка:', error);
    } finally {
        await sequelize.close();
        console.log('\nСоединение с БД закрыто.');
    }
}

init();