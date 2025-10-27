import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: 'Хлеб',
      items: [
        { name: 'Бородинский', price: 180, weight: '500г' },
        { name: 'Цельнозерновой', price: 200, weight: '600г' },
        { name: 'Французский багет', price: 150, weight: '400г' },
        { name: 'Ржаной на закваске', price: 220, weight: '700г' },
      ],
    },
    {
      category: 'Выпечка',
      items: [
        { name: 'Круассан классический', price: 120, weight: '80г' },
        { name: 'Круассан с шоколадом', price: 140, weight: '90г' },
        { name: 'Булочка с корицей', price: 100, weight: '100г' },
        { name: 'Эклер', price: 150, weight: '120г' },
      ],
    },
    {
      category: 'Торты',
      items: [
        { name: 'Медовик', price: 2500, weight: '1кг' },
        { name: 'Наполеон', price: 2200, weight: '1кг' },
        { name: 'Чизкейк классический', price: 2800, weight: '1кг' },
        { name: 'Шоколадный торт', price: 2600, weight: '1кг' },
      ],
    },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Лучший хлеб в городе! Всегда свежий, ароматный. Особенно люблю бородинский.',
      date: '2 дня назад',
    },
    {
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Круассаны просто невероятные! Как будто во Франции побывал.',
      date: '1 неделю назад',
    },
    {
      name: 'Елена Иванова',
      rating: 5,
      text: 'Заказывала торт на день рождения - все гости были в восторге!',
      date: '2 недели назад',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Домашняя пекарня</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">
                Меню
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-primary transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Свежая выпечка каждый день
              </h2>
              <p className="text-xl text-muted-foreground">
                Натуральные ингредиенты, традиционные рецепты и любовь к своему делу
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('menu')} className="text-lg px-8">
                  Заказать
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('menu')} className="text-lg px-8">
                  Посмотреть меню
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/206284fa-2873-4c24-9118-81680f68eab5/files/9da4d329-d62d-4c1a-8204-3192d075e8b0.jpg"
                alt="Свежий хлеб"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наше меню</h2>
          <Tabs defaultValue="Хлеб" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
              {menuItems.map((section) => (
                <TabsTrigger key={section.category} value={section.category}>
                  {section.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {menuItems.map((section) => (
              <TabsContent key={section.category} value={section.category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.weight}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                          <Button size="sm">В корзину</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/206284fa-2873-4c24-9118-81680f68eab5/files/2e596351-5805-4025-a3a2-19ec6b79a84e.jpg"
                alt="Наша пекарня"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">О нашей пекарне</h2>
              <p className="text-lg text-muted-foreground">
                Мы создаем выпечку с душой уже более 10 лет. Каждое утро начинаем с замешивания свежего теста,
                используя только натуральные ингредиенты и проверенные временем рецепты.
              </p>
              <p className="text-lg text-muted-foreground">
                Наша команда профессиональных пекарей работает ночью, чтобы к утру вы могли насладиться
                ароматным хлебом и нежной выпечкой.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">видов выпечки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Доставка и самовывоз</h2>
          <Tabs defaultValue="delivery" value={orderType} onValueChange={(v) => setOrderType(v as any)}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="delivery">
                <Icon name="Truck" size={20} className="mr-2" />
                Доставка
              </TabsTrigger>
              <TabsTrigger value="pickup">
                <Icon name="Store" size={20} className="mr-2" />
                Самовывоз
              </TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Условия доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Время доставки</h4>
                      <p className="text-muted-foreground">С 8:00 до 21:00 ежедневно</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Зона доставки</h4>
                      <p className="text-muted-foreground">В радиусе 5 км от пекарни</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Wallet" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Стоимость</h4>
                      <p className="text-muted-foreground">300 ₽ | Бесплатно при заказе от 1500 ₽</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pickup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Самовывоз</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Время работы</h4>
                      <p className="text-muted-foreground">С 7:00 до 22:00 ежедневно</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">ул. Хлебная, 15</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Gift" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Бонус</h4>
                      <p className="text-muted-foreground">Скидка 10% на самовывоз</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@bakery.ru" className="text-muted-foreground hover:text-primary">
                      info@bakery.ru
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">ул. Хлебная, 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Понедельник - Пятница</span>
                  <span className="font-semibold">7:00 - 22:00</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Суббота - Воскресенье</span>
                  <span className="font-semibold">8:00 - 21:00</span>
                </div>
                <Separator />
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Мы всегда рады вашим звонкам и заказам!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Домашняя пекарня. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
