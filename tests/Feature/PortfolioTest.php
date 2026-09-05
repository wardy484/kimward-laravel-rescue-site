<?php

namespace Tests\Feature;

use Tests\TestCase;

class PortfolioTest extends TestCase
{
    public function test_the_portfolio_is_rendered_with_contact_and_project_links(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('Hi, I’m Kim.', false)
            ->assertSee('I build software.')
            ->assertSee('mailto:hello@kimward.co.uk', false)
            ->assertSee('Strong Girl Society')
            ->assertSee('Plates & Plans', false)
            ->assertSee('https://www.upwork.com/freelancers/kimward4', false);
    }

    public function test_the_portfolio_has_personal_metadata_for_the_canonical_domain(): void
    {
        $response = $this->get('/')
            ->assertOk()
            ->assertSee('<title>Kim Ward — Laravel & Flutter Developer</title>', false)
            ->assertSee('<link rel="canonical" href="https://kimward.co.uk/">', false)
            ->assertSee('https://kimward.co.uk/social-card.png', false);

        preg_match('/<script type="application\/ld\+json">(.*?)<\/script>/s', $response->getContent(), $matches);

        $schema = json_decode($matches[1], true, flags: JSON_THROW_ON_ERROR);
        $entities = collect($schema['@graph'])->keyBy('@type');

        $this->assertSame('Kim Ward', $entities['Person']['name']);
        $this->assertSame($entities['Person']['@id'], $entities['ProfilePage']['mainEntity']['@id']);
        $this->assertSame($entities['WebSite']['@id'], $entities['ProfilePage']['isPartOf']['@id']);
        $this->assertSame('https://kimward.co.uk/', $entities['WebSite']['url']);
    }

    public function test_the_retired_service_page_is_no_longer_available(): void
    {
        $this->get('/shopify-reconciliation-report')->assertNotFound();
    }

    public function test_assets_use_https_behind_the_hosting_proxy(): void
    {
        $this->withHeaders([
            'Host' => 'kimward.co.uk',
            'X-Forwarded-Proto' => 'https',
        ])->get('/')
            ->assertOk()
            ->assertSee('href="https://kimward.co.uk/build/assets/', false)
            ->assertDontSee('href="http://', false);
    }
}
